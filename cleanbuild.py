import os
import re

folder = 'present'

directory = os.path.join(os.getcwd(), folder, 'build')
print(directory)
if not os.path.exists(directory):
    raise("Build directory does not exist")

acceptedFiles = ['.txt', '.js', '.css', '.css.map', '.pres']
for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(tuple(acceptedFiles)):
            with open(os.path.join(root, filename), 'r') as f:
                content = f.read()
                # match all urls
                urls = re.findall(r'/[a-zA-Z0-9_/]*\.[a-zA-Z]*[)"]', content)
                print(filename)
                print(urls)