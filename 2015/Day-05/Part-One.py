def has_3_vowels(string):
    vowel_list = ['a', 'e', 'i', 'o', 'u']
    count = 0
    for car in string:
        if car in vowel_list:
            count += 1
            if count == 3 :
                break

    return count == 3

def letter_twice(string):
    x = string[0]
    for i in range(1, len(string)):
        if x == string[i]:
            return True
        x = string[i]
        
    return False

def have_forbidden_word(string):
    forbidden_words = ['ab', 'cd', 'pq', 'xy']
    for word in forbidden_words:
        if word in string:
            return True
    
    return False

nice_count = 0
with open('input.txt') as file:
    for line in file:
        if has_3_vowels(line) and letter_twice(line) and not have_forbidden_word(line):
            nice_count += 1

print(nice_count)