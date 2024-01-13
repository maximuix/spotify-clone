'use client'

import * as RadixSlided from '@radix-ui/react-slider';
import React from "react";

interface SliderProps {
    value?: number;
    onChange?: (value: number) => void
}

const Slider: React.FC<SliderProps> = ({value = 1, onChange}) => {

    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0])
    }

    return (
        <RadixSlided.Root className='relative flex items-center select-none touch-none w-full h-10' defaultValue={[1]}
                          value={[value]} onValueChange={handleChange} max={1} step={0.1} aria-label='Volume'>
            <RadixSlided.Track className='bg-neutral-600 relative grow rounded-full h-[3px]'>
                <RadixSlided.Range className='absolute bg-white rounded-full h-full'/>
            </RadixSlided.Track>
        </RadixSlided.Root>
    );
};

export default Slider;