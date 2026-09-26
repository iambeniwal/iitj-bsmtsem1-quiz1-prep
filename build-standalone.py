#!/usr/bin/env python3
"""
Inline a course page into one self-contained .html file.

The hosted site is several files; this flattens a course into a single
document you can WhatsApp or email. It opens with no server and no
network, so it works offline and on any phone.

    python3 build-standalone.py                        # every ready course
    python3 build-standalone.py foundations-of-computing

Output lands in dist/.
"""
import os, re, sys, pathlib

ROOT = pathlib.Path(__file__).parent.resolve()
DIST = ROOT / "dist"


def inline(slug: str) -> pathlib.Path | None:
    course = ROOT / slug
    shell = course / "index.html"
    if not shell.exists():
        print(f"  skip {slug}: no index.html")
        return None
    if not (course / "data.js").exists():
        print(f"  skip {slug}: no data.js yet")
        return None

    html = shell.read_text(encoding="utf-8")

    def read(rel: str) -> str:
        # resolve a path written relative to the course folder
        return (course / rel).resolve().read_text(encoding="utf-8")

    # the offline copies must not phone home
    html = re.sub(r'\n?\s*<script src="[^"]*analytics\.js"></script>', "", html)

    # local stylesheets -> <style>
    def css_sub(m):
        href = m.group(1)
        if href.startswith("http"):
            return m.group(0)                      # leave Google Fonts alone
        return "<style>\n" + read(href) + "\n</style>"

    html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css_sub, html)

    # local scripts -> inline <script>
    def js_sub(m):
        src = m.group(1)
        if src.startswith("http"):
            return m.group(0)
        body = read(src)
        # a inlined script must not contain a literal closing tag
        body = body.replace("</script>", "<\\/script>")
        return "<script>\n" + body + "\n</script>"

    html = re.sub(r'<script src="([^"]+)"></script>', js_sub, html)

    # the back link points at the hub, which will not exist beside a loose file
    html = html.replace('<a class="backlink" href="../">&larr; All courses</a>', "")
    html = html.replace('href="../"', 'href="#"')

    DIST.mkdir(exist_ok=True)
    out = DIST / f"{slug}-quiz1-revision.html"
    out.write_text(html, encoding="utf-8")
    kb = round(len(html.encode()) / 1024, 1)
    print(f"  built {out.relative_to(ROOT)}  ({kb} KB)")
    return out


def main():
    slugs = sys.argv[1:] or [
        d.name for d in sorted(ROOT.iterdir())
        if d.is_dir() and (d / "data.js").exists()
    ]
    if not slugs:
        print("Nothing to build — no course has a data.js yet.")
        return
    print(f"Building {len(slugs)} standalone sheet(s):")
    for s in slugs:
        inline(s)


if __name__ == "__main__":
    main()
