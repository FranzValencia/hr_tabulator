import NewCriteriaModal from "@/Modals/NewCriteriaModal";
import NewJudgeModal from "@/Modals/NewJudgeModal";
import { Criteria, PageProps, UserInformation } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Activity = () => {
    const { props } = usePage<PageProps>();
    const activityInfo = props.activity;

    const [judges, setJudges] = useState<UserInformation[]>([])
    const [criterias, setCriterias] = useState<Criteria[]>([])

    const TotalPercentage = criterias.reduce((total, item) => {
        return total + Number(item.percentage);
    }, 0);

    useEffect(() => {
        setJudges(props.judges)
        setCriterias(props.criteria)
    },[])

  return (
   
    <div className="w-full md:h-screen bg-base-200 md:px-16 px-4 py-8 overflow-y-scroll">
        <Link href={route('admin')} className='btn btn-sm btn-outline'><FaArrowLeftLong />Admin Dashboard</Link>
        <div className="flex flex-col gap-0 mb-3">
            <h1 className='text-3xl uppercase font-extrabold pt-4'>{activityInfo.activity}</h1>
            <p>{activityInfo.description}</p>
        </div>
      
        {/* Judges and Criteria Here */}
        <div className='flex md:flex-row flex-col gap-6'>
        
            {/* Judges Container here */}
            <div className='w-full max-h-96 md:max-w-96 border p-4 shadow h-fit'>
                <div className="flex justify-between items-center mb-2">
                    <h1 className='text-lg font-bold'>Judges</h1>
                    <NewJudgeModal judges={judges} setJudges={setJudges} />
                </div>

                <div className="overflow-x-auto max-h-72">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className='flex justify-end'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {judges.map((judge,index) =>
                                <tr key={index}>
                                    <td>{judge.fullname}</td>
                                    <td className='flex justify-end'></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Judges Container here */}

            {/* Criteria Container */}
            <div className='w-full max-h-96 border p-4 shadow h-fit'>
                <div className="flex justify-between items-center mb-2">
                    <h1 className='text-lg font-bold'>Criteria of Judging</h1>
                    <NewCriteriaModal criterias={criterias} setCriterias={setCriterias} TotalPercentage={TotalPercentage} />
                </div>

                <div className="overflow-x-auto max-h-72">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>Percentage</th>
                                <th className='flex justify-end'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {criterias.map((criteria, index) => 
                            <tr key={index}>
                                <td>{criteria.criteria}</td>
                                <td>{criteria.percentage}</td>
                                <td className='flex justify-end'></td>
                            </tr>    
                            )}               
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
        {/* Judges and Criteria Here */}
        <div className='w-full max-h-96 border p-4 shadow h-fit mt-6'>
            <div className="flex justify-between items-center mb-2">
                <h1 className='text-lg font-bold'>Contestant and Scores</h1>
                <button className="btn btn-primary btn-xs">Add new</button>
            </div>

            <div className="overflow-x-auto max-h-72">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='flex justify-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className='flex justify-end'></td>
                        </tr>
                    
                
                    </tbody>
                </table>
            </div>

        </div>



    </div>
  )
}

export default Activity