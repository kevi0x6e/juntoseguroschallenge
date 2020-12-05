#!/usr/bin/python

vetEntrada = [0,1,2,3,4,5,6,7,8,9]
nVet = []

rot = int( input("Rot: "))
rot = -rot

def shift(vetEntrada, rot):
	nVet = vetEntrada[rot:] + vetEntrada[:rot]
	print([nVet])

shift(vetEntrada, rot)
