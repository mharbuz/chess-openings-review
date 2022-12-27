## One

```<h2>data-fen="(.*)"
href="(.*)"
>(.*)</a```

---

```"family":{
"name":"$3",
"fen":"$1",
"lichess-href":"$2",
"variants":[```

## Two

```data-fen="(.*)"

href="(.*)"
><h3>(.*)<\/h3></a```

---

```"variant":{
"name":"$3",
"fen":"$1",
"lichess-href":"$2",
},```

## Three

```"variants":\[
>
.*<\/h2>
    <div class="puzzle-openings__list">```

---

```"variants":[```