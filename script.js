window.addEventListener('keydown', function (e) {

    if(e.key=='w' && this.document.getElementById("rocketPart").classList.contains("h2d") || e.key=='w' && this.document.getElementById("rocketPart").classList.contains("h2u"))
    {
        this.document.getElementById("rocketPart").classList.remove("h1");
        this.document.getElementById("rocketPart").classList.remove("h3");
        this.document.getElementById("rocketPart").classList.remove("h2d");
        this.document.getElementById("rocketPart").classList.remove("h2u");
        this.document.getElementById("rocketPart").classList.add("h1");
        this.document.getElementById("firePart").classList.remove("h1");
        this.document.getElementById("firePart").classList.remove("h3");
        this.document.getElementById("firePart").classList.remove("h2u");
        this.document.getElementById("firePart").classList.remove("h2d");
        this.document.getElementById("firePart").classList.add("h1");
    }
    if(e.key=='w' && this.document.getElementById("rocketPart").classList.contains("h3"))
    {
        this.document.getElementById("rocketPart").classList.remove("h1");
        this.document.getElementById("rocketPart").classList.remove("h3");
        this.document.getElementById("rocketPart").classList.remove("h2d");
        this.document.getElementById("rocketPart").classList.remove("h2u");
        this.document.getElementById("rocketPart").classList.add("h2u");
        this.document.getElementById("firePart").classList.remove("h1");
        this.document.getElementById("firePart").classList.remove("h3");
        this.document.getElementById("firePart").classList.remove("h2u");
        this.document.getElementById("firePart").classList.remove("h2d");
        this.document.getElementById("firePart").classList.add("h2u");
    }
    else if(e.key=='s' && this.document.getElementById("rocketPart").classList.contains("h2d") || e.key=='s' && this.document.getElementById("rocketPart").classList.contains("h2u"))
    {
        this.document.getElementById("rocketPart").classList.remove("h1");
        this.document.getElementById("rocketPart").classList.remove("h3");
        this.document.getElementById("rocketPart").classList.remove("h2d");
        this.document.getElementById("rocketPart").classList.remove("h2u");
        this.document.getElementById("rocketPart").classList.add("h3");
        this.document.getElementById("firePart").classList.remove("h1");
        this.document.getElementById("firePart").classList.remove("h3");
        this.document.getElementById("firePart").classList.remove("h2u");
        this.document.getElementById("firePart").classList.remove("h2d");
        this.document.getElementById("firePart").classList.add("h3");
    }    
    else if(e.key=='s' && this.document.getElementById("rocketPart").classList.contains("h1"))
    {
        this.document.getElementById("rocketPart").classList.remove("h1");
        this.document.getElementById("rocketPart").classList.remove("h3");
        this.document.getElementById("rocketPart").classList.remove("h2d");
        this.document.getElementById("rocketPart").classList.remove("h2u");
        this.document.getElementById("rocketPart").classList.add("h2d");
        this.document.getElementById("firePart").classList.remove("h1");
        this.document.getElementById("firePart").classList.remove("h3");
        this.document.getElementById("firePart").classList.remove("h2u");
        this.document.getElementById("firePart").classList.remove("h2d");
        this.document.getElementById("firePart").classList.add("h2d");
    }

  }, false);