        class StaticWebPage {
            characters = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/", "=", "c"];
            validated = "";

            clearValidated = () => {
                document.getElementById("result").innerText = "";
                return this.validated = "";
            }

            click = character => {
                const unvalidated = this.validated.concat(character) || character.join("");
                const lastValidated = this.validated[this.validated.length - 1] || "";
                console.log('char', character);
                console.log('unv', unvalidated);
                console.log('last', lastValidated);

                /c/.test(character) ? this.clearValidated() : null;

                /\-/.test(unvalidated) && unvalidated.length === 1 ? this.validated = unvalidated : null;

                /\d/.test(character) ? this.validated = unvalidated : null;

                /[\*\-\+\/]/.test(character) && /\d/.test(lastValidated) ? this.validated = unvalidated : null;

                /=/.test(character) ?
                    this.validated = JSON.stringify(eval(this.validated)) : null;

                document.getElementById("result").innerText = this.validated;

            }

            build = () => {
                const result = document.createElement("span");
                result.setAttribute("id", "result");
                document.getElementById("calculator").appendChild(result);

                for (let i = 0; i < this.characters.length; i++) {
                    const character = this.characters[i];

                    const button = document.createElement("button");

                    button.setAttribute("type", "button");

                    button.setAttribute("key", character);

                    button.innerText = character;

                    button.onclick = () => this.click(character);

                    document.getElementById("calculator").appendChild(button);
                };
            };
        };

        new StaticWebPage().build();