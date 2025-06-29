import os
import re
import sys

def rename_photos(directory):
    pattern = re.compile(r'^([A-Za-zА-Яа-я]{2}\.\d{4}\.\d{5}(?:-\w+)?)')
    for filename in os.listdir(directory):
        root, ext = os.path.splitext(filename)
        if ext.lower() != '.jpg':
            continue
        match = pattern.match(root)
        if match:
            new_name = f"{match.group(1)}.jpg"
            src = os.path.join(directory, filename)
            dst = os.path.join(directory, new_name)
            if src != dst:
                os.rename(src, dst)
                print(f"Renamed {filename} -> {new_name}")

def main(argv=None):
    argv = argv or sys.argv
    if len(argv) != 2:
        print('Usage: python rename_photos.py <directory>')
        return 1
    rename_photos(argv[1])

if __name__ == '__main__':
    raise SystemExit(main())

