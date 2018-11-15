
namespace WebMachine {
    export class RectTransform extends Component {

        Start(): void {
            throw new Error("Method not implemented.");
        }
        Update(): void {
            throw new Error("Method not implemented.");
        }
        End(): void {
            throw new Error("Method not implemented.");
        }

        public PixelScale: Nums.Vec3 = new Nums.Vec3();
        public PixelPos: Nums.Vec3 = new Nums.Vec3();



        public get PercentPos(): Nums.Vec3 {
            return new Nums.Vec3();
        }
        public set PercentPos(vec: Nums.Vec3) {
            
        }
        


        // Transformations:
        Move(vec: Nums.Vec3): RectTransform {
            this.PixelPos.addeq(vec);
            return this;
        }
        Rotate(): RectTransform {
            return this;
        }
        Scale(): RectTransform {
            return this;
        }

        LookAt(): RectTransform {
            return this;
        }

        RotateAround(): RectTransform {
            return this;
        }
    }
}