

namespace WebMachine {
    export class Tag {
        private components: Component[] = [];
        public el: HTMLDivElement;

        public transform: RectTransform = new RectTransform();

        constructor(comps: Component[]) {
            this.el = document.createElement("div");
            this.el.style.position = "absolute";
            comps.forEach(x => { this.AddComponents(x); });
        }

        AddComponents(...comps: Component[]): Tag {
            comps.forEach((comp) => {
                comp.Init(this);
                this.components.push(comp);
            });
            return this;
        }

        Start(): void {
            for (const comp of this.components) {
                comp.Start();
            }
        }

        Update(): void {
            for (const comp of this.components) {
                comp.Update();
            }
        }

        End(): void {
            for (const comp of this.components) {
                comp.End();
            }
        }
    }
}