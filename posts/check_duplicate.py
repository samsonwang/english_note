
import os
import sys
import io
import orgparse as org

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
# print(dir(org))


def get_all_org_files(directory):
    """Get .org files (case insensitive)"""
    org_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.org'):
                file_path = os.path.join(root, file)
                org_files.append(file_path)
    return org_files

def get_word_from_org_file(file_path):
    word_list = []
    root = org.load(file_path)
    for node in root.children:
        if node.heading:
            word_list.append(node.heading)
    return word_list

def get_all_words(org_files):
    word_set = set()
    for file_path in org_files:
        # print("reading:", file_path)
        word_list = get_word_from_org_file(file_path)
        for word in word_list:
            word_set.add(word)
    return word_set


check_file_path = ".\\2025\\W35_20250826.org"
print("file to check:", check_file_path)
print("---")

org_files = get_all_org_files(".")
# remove check file
org_files.remove(check_file_path)
print("org files:", org_files)
print("---")

word_set = get_all_words(org_files)
print("word set:", word_set)
print("---")

word_list = get_word_from_org_file(check_file_path)
print("word list:", word_list)
print("---")

for word in word_list:
    if word in word_set:
        print("duplicate:", word)
        
print("---")

print("check finish")


