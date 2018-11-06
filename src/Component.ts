

namespace WebMachine {
    export abstract class Component {
        protected tag!: Tag;

        public Init(tag: Tag): void {
            this.tag = tag;
        }

        abstract Start(): void;
        abstract Update(): void;
        abstract End(): void;
    }
}