'use client'
import React, { useState } from 'react'
import EachPageItem from './EachPageItem';
import Button from './Button';

type Props = {
    pages: { id: string; label: string }[];
}

export default function PagesCard({ pages }: Props) {
    const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set());

    const handlePageSelection = (id: string, checked: boolean) => {
        if (id === 'select-all') {
            if (checked) {
                setSelectedPages(new Set(pages.map(page => page.id)));
            } else {
                setSelectedPages(new Set());
            }
        } else {
            const newSelected = new Set(selectedPages);
            if (checked) {
                newSelected.add(id);
            } else {
                newSelected.delete(id);
            }
            setSelectedPages(newSelected);
        }
    };

    const isAllSelected = selectedPages.size === pages.length;
    const hasSelectedItems = selectedPages.size > 0;

    return (
        <div className='card md:w-[370px] w-full rounded-[6px] border-[1px] py-[10px] border-border'>
            <EachPageItem
                id={'select-all'}
                label={'All pages'}
                checked={isAllSelected}
                onChange={handlePageSelection}
            />
            <div className='py-[10px] px-[15px]'>
                <hr />
            </div>
            <div className={`flex flex-col`}>
                {pages.map((page) => (
                    <EachPageItem
                        key={page.id}
                        id={page.id}
                        label={page.label}
                        checked={selectedPages.has(page.id)}
                        onChange={handlePageSelection}
                    />
                ))}
            </div>
            <div className='py-[10px] px-[15px]'>
                <hr />
            </div>
            <div className='py-[10px] px-[15px]'>
                <Button fullWidth disabled={!hasSelectedItems}>Done</Button>
            </div>
        </div>
    )
}