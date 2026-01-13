import{r as t,j as n}from"./index-CZhUHB75.js";import{J as i}from"./JavaOutputPracticeTemplate-BsklymJO.js";import"./JavaCodeBlock-D1xHb_PF.js";import"./prism-BFApiKhE.js";import"./browser-DlC6yAx7.js";import"./prism-java-CQA27I6F.js";const e="Java Programming",o="ICSE",u="Mixed Topics – Output Based Practice",a={name:"Java",icon:"java",type:"svg",path:"/logos/Java-original.svg",alt:"Java Programming Logo"},d=[{id:1,difficulty:"Beginner",question:"Find the output:",code:`class Test {
	int x=5;
	public static void main(String args[]){
		Test t = new Test();
		System.out.println(t.x);
	}
}`,output:"5",explanation:"Object t accesses instance variable x."},{id:2,difficulty:"Beginner",question:"Find the output:",code:`int a=10,b=3;
System.out.println(a/b);`,output:"3",explanation:"Both are integers, so integer division is used."},{id:3,difficulty:"Beginner",question:"Find the output:",code:`double x = Math.sqrt(16);
System.out.println(x);`,output:"4.0",explanation:"Square root of 16 is 4."},{id:4,difficulty:"Beginner",question:"Find the output:",code:`int a=5;
System.out.println(a++ + ++a);`,output:"12",explanation:"a++ gives 5 then a becomes 6, ++a makes it 7 → 5+7=12."},{id:5,difficulty:"Intermediate",question:"Find the output:",code:`int x=10;
if(x>5)
	System.out.println("High");
else
	System.out.println("Low");`,output:"High",explanation:"10 is greater than 5."},{id:6,difficulty:"Intermediate",question:"Find the output:",code:`int n=7;
if(n%2==0)
	System.out.print("Even");
else if(n%3==0)
	System.out.print("Div by 3");
else
	System.out.print("Odd");`,output:"Odd",explanation:"7 is neither even nor divisible by 3."},{id:7,difficulty:"Intermediate",question:"Find the output:",code:`int a=3,b=4;
System.out.println(Math.max(a,b));`,output:"4",explanation:"max(3,4) is 4."},{id:8,difficulty:"Intermediate",question:"Find the output:",code:`int a=5;
switch(a){
	case 4: System.out.print("Four"); break;
	case 5: System.out.print("Five"); break;
	default: System.out.print("None");
}`,output:"Five",explanation:"Case 5 is matched."},{id:9,difficulty:"Intermediate",question:"Find the output:",code:`int i=1;
while(i<=3){
	System.out.print(i);
	i++;
}`,output:"123",explanation:"While loop prints 1 to 3."},{id:10,difficulty:"Intermediate",question:"Find the output:",code:`int i=1;
do{
	System.out.print(i);
	i++;
}while(i<=3);`,output:"123",explanation:"do-while executes at least once."},{id:11,difficulty:"Advanced",question:"Find the output:",code:`int i;
for(i=1;i<=5;i++){
	if(i==3)
		break;
	System.out.print(i);
}`,output:"12",explanation:"Loop stops when i becomes 3."},{id:12,difficulty:"Advanced",question:"Find the output:",code:`for(int i=1;i<=5;i++){
	if(i==3)
		continue;
	System.out.print(i);
}`,output:"1245",explanation:"3 is skipped due to continue."},{id:13,difficulty:"Advanced",question:"Find the output:",code:`for(int i=1;i<=3;i++){
	for(int j=1;j<=i;j++)
		System.out.print("*");
	System.out.println();
}`,output:`*
**
***`,explanation:"Nested loop creates a star pattern."},{id:14,difficulty:"Advanced",question:"Find the output:",code:`double x = Math.ceil(4.2);
System.out.println(x);`,output:"5.0",explanation:"Ceil rounds up to nearest integer."},{id:15,difficulty:"Advanced",question:"Find the output:",code:`double x = Math.floor(4.9);
System.out.println(x);`,output:"4.0",explanation:"Floor rounds down."},{id:16,difficulty:"Advanced",question:"Find the output:",code:`int a=5,b=10;
System.out.println(Math.min(a,b));`,output:"5",explanation:"Minimum of 5 and 10 is 5."},{id:17,difficulty:"Advanced",question:"Find the output:",code:`int x = (int)(Math.random()*10);
System.out.println(x<10);`,output:"true",explanation:"Math.random()*10 gives value from 0 to 9."},{id:18,difficulty:"Advanced",question:"Find the output:",code:`class Demo{
	static int a=10;
	public static void main(String args[]){
		System.out.println(Demo.a);
	}
}`,output:"10",explanation:"Static variable accessed using class name."},{id:19,difficulty:"Advanced",question:"Find the output:",code:`int i=1,sum=0;
while(i<=5){
	sum+=i;
	i++;
}
System.out.println(sum);`,output:"15",explanation:"1+2+3+4+5 = 15."},{id:20,difficulty:"Advanced",question:"Find the output:",code:`for(int i=1;i<=3;i++){
	for(int j=3;j>=i;j--)
		System.out.print(j);
	System.out.println();
}`,output:`321
32
3`,explanation:"Nested loop reverse number pattern."}],s={subject:e,class:"IX",board:o,topic:u,subjectLogo:a,questions:d};class x extends t.Component{render(){return n.jsx(i,{data:s})}}export{x as default};
