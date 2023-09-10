def cipher(data, key, f="e"):
    result = ""
    if f == "e":
        for char in data:
            result += chr(ord(char) ^ key)

        return result

print(cipher(input(),int(input())))
