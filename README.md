**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

**NOTA**
non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.

**BONUS:**
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci

**Logica**
1- genero 5 numeri random e li stampo a schermo
2- faccio partire il timer di 10 secondi
3- come scade il timer i numeri scompariranno e compariranno 5 input
4- una volta inseriti i 5 numeri indipendentemente dall'ordine, i numeri verrano controllati e verrà restituito il risultato che indicherà quanti e quali numeri sono stati indovinati