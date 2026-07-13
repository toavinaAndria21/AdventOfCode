def has_non_overlapping_pair(string):
    dic = {}
    for i in range(len(string) - 1):
        pair = string[i:i+2]

        if pair in dic:
            if i >= dic[pair] + 2:
                return True
        else:
            dic[pair] = i    
   
    return False

def has_sandwiched_letter(string):
    for i in range(1, len(string) - 1):
        if string[i-1] == string[i+1]:
            return True
    return False

nice_count = 0
with open('input.txt') as file:
    for line in file:
        if has_non_overlapping_pair(line) and has_sandwiched_letter(line):
            nice_count += 1
print(nice_count)