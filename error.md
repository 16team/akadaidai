## Error Type
Build Error

## Error Message
Parsing ecmascript source code failed

## Build Output
./src/components/layout/Footer.tsx:20:25
Parsing ecmascript source code failed
  18 |                         営業時間: 11:00 - 14:00 / 18:00 - 21:00<br />
  19 |                         定休日: 水曜日
> 20 |                     </p>
     |                         ^
> 21 |                 </div>
     | ^^^^^^^^^^^^^^^^^
  22 |             </div>
  23 |             <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
  24 |                 &copy; {new Date().getFullYear()} Menya Akadaidai. All rights reserved.

Expected '</', got 'jsx text (
                )'

Import trace:
  Server Component:
    ./src/components/layout/Footer.tsx
    ./src/app/layout.tsx

Next.js version: 16.0.3 (Turbopack)
