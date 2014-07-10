// Create the classes that will be used 
function Client(clientName){
	clientName: clientName
	CSM: "unassigned";
	IPM: "unassigned";
	Analyst: "unassigned";
	CustomProjects:[];
	startDate: "2014-01-01";
	priotity: 1;
	function printInfoClient(){
	console.log(clientName);
	};
};

function CustomProject(projectName, hoursScoped){
	projectName: projectName;
	teamMember:  "unassigned";
	hoursScoped: hoursScoped;
	startDate: startDate
};

function DigitalImplementation(){
	timelineCSM: [("step",1)];
	timelineIPM: [("step",1)];
	timelineAnalyst: [("step",1)]
}

function OmniImplementation(){
	timelineCSM: [("step",1)];
	timelineIPM: [("step",1)];
	timelineAnalyst: [("step",1)]
}

function EntImplementation(){
	timelineCSM: [("step",1)];
	timelineIPM: [("step",1)];
	timelineAnalyst: [("step",1)]
}

var client = new Client("test");
client.printInfoClient;