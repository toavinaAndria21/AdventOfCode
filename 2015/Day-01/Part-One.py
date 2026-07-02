with open('input.txt', 'r') as file:
    line = file.readlines()
    line_string = line[0]

floor = 0
for c in line_string:
    if c == '(':
        floor += 1
    elif c == ')':
        floor -= 1

print(floor)