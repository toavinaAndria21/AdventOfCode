with open('input.txt', 'r') as file:
    line_string = file.read()

floor = 0
for index, c in enumerate(line_string):
    if c == '(':
        floor += 1
    elif c == ')':
        floor -= 1
    
    if floor == -1:
        print(index + 1)
        break
