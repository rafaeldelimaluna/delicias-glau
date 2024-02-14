# import os

# root = os.getcwd()
# files = os.listdir(root + "/img")
# for i, file in enumerate(files):
#     file_dir = root + f"/img/{file}"
#     new_file_dir = root + f"/img/cake-{i}.jpeg"
#     os.rename(file_dir, new_file_dir)

# print(f"Pequeno -> R${180/30}")
# print(f"Medio -> R${280/40}")
# print(f"Grande -> R${380/50}")

from time import sleep

print(f"{'ROBÔ QUE TIRA SUAS DÚVIDAS':-^40}")
input("Faça uma pergunta -> ")
sleep(1)
print(f"{'processando'.upper():-^40}")
sleep(1)
print(f"{'analizando'.upper():-^40}")
sleep(1)
print(f"{'criando resposta'.upper():-^40}")
print(f"\n\033[1;32;42m{'RESPOSTA':-^40}\033[m")
print("CLARO QUE SIM")
