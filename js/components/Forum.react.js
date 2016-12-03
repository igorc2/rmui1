var Forum = React.createClass({

    getInitialState: function(){

        return {
            allAnswers : {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building",
                    correct: false
                },
                "3": {
                    body: "React is synonym for 'respond'",
                    correct: false
                }
            }
        }

    },

    render: function() {
		return (
			<div>
				<ForumHeader />
				<div className="container">
					<ForumQuestion />
					<hr/>
					<ForumAnswers allAnswers={ this.state.allAnswers } />
					<hr/>
					<h4>Add a answer</h4>
					<ForumAddAnswerBox />
				</div>
			</div>
		);
    }

});