import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

const ProductViewer = () => {
    const {color,scale,setColor,setScale} = useMacBookStore();

    return(
        <section id="product-viewer">
            <h2>Take a Closer Look.</h2>

            <div className="controls">MacBookPro {scale} in {color}</div>
            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div onClick={() => setColor('#adb5bd')}
                    className={clsx('bg-neutral-300',color==='#adb5bd' && 'active')}
                    />
                    <div onClick={() => setColor('#2e2c2e')}
                    className={clsx('bg-neutral-900',color==='#2e2c2e' && 'active')}
                    />
                </div>

                <div className="size-control">
                    <div className="size-control">
                        <div onClick={() => setScale(0.6)}
                            className={clsx(scale===0.6 ? 'bg-white text-black'  : 'bg-transparent text-white')}
                        />
                        <div onClick={() => setScale(0.8)}
                            className={clsx(scale===0.8 ? 'bg-white text-black'  : 'bg-transparent text-white')}
                        />
                    </div>
                </div>
            </div>
        <Canvas id="canvas" camera={{position:[0,2,5],fov:50,near:0.1,far:100}}>
            <Box position={[-1,1,0]} scale={10* scale} material-color={color}/>
            <OrbitControls enableZoom={false} />
        </Canvas>
        </section>
    )
}
export default ProductViewer;