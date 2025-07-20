import { categories } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';


function Category() {
    return (
        <div className="bg-white w-full rounded-[30px] p-5 my-16 shadow-sm">
            <p className="text-[#484848] font-sniglet-400 text-lg mb-4">Let's Begin With</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex-1  h-[123px] rounded-[30px] flex flex-col items-center justify-center text-center"
                        style={{ backgroundColor: category.bgColor }}
                    >
                        {category.icon && (
                            <Image
                                src={category.icon}
                                width={32}
                                height={32}
                                alt={category.alt || category.line1 + ' ' + category.line2}
                                className="mb-1"
                            />
                        )}
                        <p
                            className="font-poppins-600 text-[14px] leading-tight"
                            style={{ color: category.textColor }}
                        >
                            {category.line1} <br /> {category.line2}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
