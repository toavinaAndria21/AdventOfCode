# Santa
x1, y1 = 0, 0
# Robo-Santa
x2, y2 = 0, 0  

house_list = {(0, 0)}
with open('input.txt') as file:
    for line in file:
        for index, el in enumerate(line):
            match el:
                case '>': 
                    dx, dy = 1, 0
                case '<': 
                    dx, dy = -1, 0
                case '^':
                    dx, dy = 0, 1
                case 'v': 
                    dx, dy = 0, -1
                case _:
                    continue

            if index % 2 == 0:
                x1 += dx
                y1 += dy
                house_list.add((x1, y1))
            else:
                x2 += dx
                y2 += dy
                house_list.add((x2, y2))

print(len(house_list))

