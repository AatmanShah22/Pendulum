
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder, bobobject1, bobobject2, bobobject3, bobobject4, bobobject5, ground;



function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	}

	var holder_options = {
		isStatic : true 
	}

	var bobobject1_options = {
		restitution : 1.0,
		density : 1.0
	}

	var bobobject2_options = {
		restitution : 1.0,
		density : 1.0
	}

	var bobobject3_options = {
		restitution : 1.0,
		density : 1.0
	}

	var bobobject4_options = {
		restitution : 1.0,
		density : 1.0
	}

	var bobobject5_options = {
		restitution : 1.0,
		density : 1.0
	}



	ground = Bodies.rectangle(200,330,400,50,ground_options)
	World.add(world,ground);

	holder = Bodies.rectangle(200,100,200,20,holder_options);
	World.add(world,holder);

	bobobject1 = Bodies.circle(168,205,35,bobobject1_options);
	World.add(world,bobobject1);

	bobobject2 = Bodies.circle(200,200,35,bobobject2_options);
	
	bobobject3 = Bodies.circle(230,200,35,bobobject3_options);

	bobobject4 = Bodies.circle(260,200,35,bobobject4_options);

	bobobject5 = Bodies.circle(140,200,35,bobobject5_options);

	var options = {
		bodyA : bobobject1,
		bodyB : holder,
		stiffness: 0.04,
		length : 100
	}

	var options2 = {
		bodyA : bobobject2,
		bodyB : holder,
		stiffness: 0.04,
		length : 100
	}

	var options3 = {
		bodyA : bobobject3,
		bodyB : holder,
		stiffness: 0.04,
		length : 100
	}

	var options4 = {
		bodyA : bobobject4,
		bodyB : holder,
		stiffness : 0.04,
		length : 100
	}

	var options5 = {
		bodyA : bobobject5,
		bodyB : holder,
		stiffness : 0.04,
		length : 100
	}
	var string = Constraint.create(options);
	World.add(world,string);

	var string = Constraint.create(options2);
	
	var string = Constraint.create(options3);

	var string = Constraint.create(options4);

	var string = Constraint.create(options5);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background("black");
	rectMode(CENTER);
	rect(holder.position.x,holder.position.y,200,20);
  

	ellipseMode(RADIUS);
	ellipse(bobobject1.position.x,bobobject1.position.y,15);

	ellipseMode(RADIUS);
	ellipse(bobobject2.position.x,bobobject2.position.y, 15);

	ellipseMode(RADIUS);
	ellipse(bobobject3.position.x,bobobject3.position.y, 15);

	ellipseMode(RADIUS);
	ellipse(bobobject4.position.x,bobobject4.position.y, 15);

	ellipseMode(RADIUS);
	ellipse(bobobject5.position.x,bobobject5.position.y, 15);
  
	strokeWeight(5);
	stroke("lightgreen");
	line(bobobject1.position.x,bobobject1.position.y, 170 ,100)

	strokeWeight(5);
	stroke("lightgreen");
	line(bobobject2.position.x,bobobject2.position.y,holder.position.x,holder.position.y)

	strokeWeight(5);
	stroke("lightgreen");
	line(bobobject3.position.x,bobobject3.position.y,230,100);

	strokeWeight(5);
	stroke("lightgreen");
	line(bobobject4.position.x,bobobject4.position.y,260,100);

	strokeWeight(5);
	stroke("lightgreen");
	line(bobobject5.position.x,bobobject5.position.y,140,100);

	bobobject1.display();
	bobobject2.display();
	bobobject3.display();
	bobobject4.display();
	bobobject5.display();
	holder.display();
	ground.display();
	
	background(0);


  
  drawSprites();
 
}



