const heading=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I am h1"),React.createElement("h2",{},"I am h2")]
    ),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am h1 second chile"),React.createElement("h2",{},"I am h2 second chile")])])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)