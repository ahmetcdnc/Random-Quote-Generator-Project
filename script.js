function generate(){
    var quotes = {
        "- Albert Einstein" : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it is beauty.”',
        "- Jules Renard" : '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        "- John Galsworthy" :'“Life calls the tune, we dance.”'
    }

    //Objenin "key"lerini(alıntı sahipleri) getirmek için kullanılır.iki nokta(:)'nın sol kısmı key, sağ kısmı ilişkili değerdir.(quotes'de bulunan keyleri "authors" içine koyduk.)
    var authors = Object.keys(quotes);

    //Yazarlar içinden rastgele bir yazar seçiyoruz.
    var author = authors[Math.floor(Math.random()*authors.length)];

    //quotes[author], quotes nesnesindeki yazar anahtarıyla ilişkili değere erişir. Elde edilen değer quote değişkenine atanır.(yazarı anahtar olarak kullanıp değere ulaşır.)
    var quote = quotes[author];

    document.getElementById("quote").innerHTML =quote;
    document.getElementById("author").innerHTML =author;

}