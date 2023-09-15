import random

def random_nibble():
    return bin(random.randrange(1,16))

def binary_to_hex(b):
    integer = int(b, 2)
    return hex(integer)[2:]

if __name__ == "__main__":
    for i in range(10):
        random_binary = random_nibble()
        correct_hex= binary_to_hex(random_binary)
        
        print(f"Binary: {random_binary[2:]}")
        hex_input = input("Enter the Hexadecimal equivalent: ")

        if hex_input == correct_hex:
            print("Correct!") 
        else:
            print(f"Wrong. The correct answer is {correct_hexadecimal}.")
