x = 0
y = 0

house_list = {(x, y)}
with open('input.txt') as file:
    for line in file:
        for el in line:
            if el == '>':
                x += 1
            elif el == '<':
                x -= 1
            elif el == '^':
                y += 1
            elif el == 'v':
                y -= 1
            else:
                continue
            
            house_list.add((x, y))

print(len(house_list))

