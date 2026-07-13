import hashlib

i = 0
while True :
    secret_key = 'yzbqklnj' + str(i)
    md5_hash = hashlib.md5(secret_key.encode())
    string_hash = str(md5_hash.hexdigest())

    if string_hash[:5] == "00000":
        break

    i += 1

print("Response : ", i)
print(string_hash)
