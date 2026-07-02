total_ribbon = 0

with open('input.txt') as file:
    for line in file:
        length, width, height = [int(number) for number in line.split('x')]
        smallest_perimeter = 2 * (length + width + height - max(length, width, height))
        volume = length*width*height
        total_ribbon += smallest_perimeter + volume

print(total_ribbon)