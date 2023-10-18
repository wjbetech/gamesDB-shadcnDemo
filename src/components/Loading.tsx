import { Skeleton } from "./ui/skeleton"

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-auto">
      {Array.from({length: 12}, (_, i) => i + 1).map((id) => (
        <div key={id} className="items-center space-x-4 p-10">
          <div className="space-y-4">
            <Skeleton className="h-[200px] w-[100%] mb-4" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))
      }
    </div>
  )
}
