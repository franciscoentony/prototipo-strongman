import random
import time
import os

caracteres = "01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"

def hacker_screen():
    try:
        while True: 
            linha = "".join(random.choice(caracteres) for _ in range(80))
            print(linha)
            time.sleep(0.05) 
    except KeyboardInterrupt:
        print("\n")

if __name__ == "__main__":

    os.system("cls" if os.name == "nt" else "clear")
    hacker_screen()
