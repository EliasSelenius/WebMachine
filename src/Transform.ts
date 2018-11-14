
namespace WebMachine {
    export class RectTransform {

        public PixelPos: Nums.Vec3 = new Nums.Vec3();

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