
namespace WebMachine {
    export class Page {
        private tags: Tag[] = [];


        constructor() {

        }

        public New(...comps: Component[]): Tag {
            let t: Tag = new Tag(comps);
            this.Add(t);
            return t;
        }

        public Add(tag: Tag): Tag {
            this.tags.push(tag);
            document.body.appendChild(tag.el);

            tag.Start();
            return tag;
        }

        public Remove(tag: Tag): Tag {
            let t: Tag = this.tags.splice(this.tags.indexOf(tag))[0];
            t.End();
            return t;
        }

        public Update(): void {
            for (const tag of this.tags) {
                tag.Update();
            }
        }
    }
}