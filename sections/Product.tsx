import Image from "apps/website/components/Image.tsx";
import RadioButton from "site/components/ui/RadioButton.tsx";

interface ProductProps {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    images: string[];
}

export default function Product(props: ProductProps) {
    return (
        <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            height={100}
                            width={30}
                            src={props.images[0]}
                            alt={props.name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {props.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => {}}
                                className="aspect-square overflow-hidden rounded-lg bg-gray-100"
                            >
                                <Image
                                    width={30}
                                    src={image}
                                    alt={`${props.name} thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover object-center"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{props.name}</h1>
                        <p className="text-xl font-semibold mt-2">
                            R$ {props.price}
                        </p>
                    </div>
                    <p className="text-gray-600">{props.description}</p>

                    {/* Color Variants */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Tamanhos</h3>
                        <fieldset className="flex gap-4">
                            {props.sizes.map((size) => (
                                <div
                                    key={size}
                                    className="flex items-center space-x-2"
                                >
                                    <RadioButton
                                        radioGroupName="size"
                                        radioProperty={size}
                                        text={size}
                                    />
                                </div>
                            ))}
                        </fieldset>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
