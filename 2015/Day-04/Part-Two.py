import hashlib

i = 0
input = 'yzbqklnj'
while True :
    secret_key = input + str(i)
    md5_hash = hashlib.md5(secret_key.encode())
    string_hash = str(md5_hash.hexdigest())

    if string_hash[:6] == "000000":
        break

    i += 1

print("Response : ", i)
print(string_hash)
