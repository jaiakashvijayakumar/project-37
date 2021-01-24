
class Question{

    constructor(){

        this.optional1 = createElement('h2');
        this.optional2 = createElement('h2');
        this.optional3 = createElement('h2');
        this.optional4 = createElement('h2');

        this.title = createElement('h2');

        this.input = createInput("Name");




    }

    hide(){

       
        this.input.hide();
        this.title.hide();

        this.optional1.hide();
        this.optional2.hide();
        this.optional3.hide();
        this.optional4.hide();
        

    }

    display(){

        this.title.html("My Quiz");
        this.title.position(displayWidth/2-50,0);

        this.question.html("Question:- Who is the hero of Pirates of the carribean")
        this.question.position(150,98);

        this.optional1.html("Jack sparrow")
        this.optional1.position(150,100);

        this.optional2.html("william turner");
        this.optional2.position(150,200);

        this.input.position(150,230);



       

        

    }
}
