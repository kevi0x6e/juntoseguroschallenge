lista = [0,1,2,3,4,5,6,7,8,9]

rot = int(input("Rot: "))

def shift(l, n):
    new_l = []
    if n > 0:
        for i in range(len(l)):
            new_i = i+n
            if new_i >= len(l)-1:
                new_i %= len(l)
            new_l.insert(new_i, l[i])
    elif n < 0:
        for i in range(len(l)):
            new_i = i+n
            if new_i <= 0:
                new_i %= len(l)
            new_l.insert(new_i, l[i])
    else:
        return l
    return new_l
    
print(shift(lista, rot))
