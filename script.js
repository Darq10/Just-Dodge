window.addEventListener('keydown', function (e) {

    if(e.key=='w')
    {
        this.document.getElementById("rocketPart").classList.remove("h2");
        this.document.getElementById("rocketPart").classList.remove("h3");
        this.document.getElementById("rocketPart").classList.add("h1");
        this.document.getElementById("firePart").classList.remove("h2");
        this.document.getElementById("firePart").classList.remove("h3");
        this.document.getElementById("firePart").classList.add("h1");
    }
    else if(e.key=='s')
    {
        this.document.getElementById("rocketPart").classList.remove("h1");
        this.document.getElementById("rocketPart").classList.remove("h2");
        this.document.getElementById("rocketPart").classList.add("h3");
        this.document.getElementById("firePart").classList.remove("h1");
        this.document.getElementById("firePart").classList.remove("h2");
        this.document.getElementById("firePart").classList.add("h3");
    }
    else if(e.key==" ")
    {
        this.document.getElementById("rocketPart").classList.remove("h1");
        this.document.getElementById("rocketPart").classList.remove("h3");
        this.document.getElementById("rocketPart").classList.add("h2");
        this.document.getElementById("firePart").classList.remove("h1");
        this.document.getElementById("firePart").classList.remove("h3");
        this.document.getElementById("firePart").classList.add("h2");
    }

  }, false);