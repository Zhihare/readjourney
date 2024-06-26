import React, { useState } from 'react';
import { ButtonLogout } from '../BurgerMenu/BurgerMenu.styled';
import { FilterFormCont } from './../Filter/Filter.styled';
import { startReading, stopReading } from '../../redax/Books/booksThanks';
import { AppDispatch } from '../../redax/store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import ModalAddBook from '../Modal/modalAddBook';
import * as Yup from 'yup';
import { selectBookInfo } from '../../redax/Books/booksSelector';



type Props = {};

const FormToStart = (props: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const { bookId } = useParams<{ bookId: string }>();
    const [page, setPage] = useState<number|''>('');
    const [showModal, setModal] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { totalPages, progress }:{totalPages: number, progress:any} = useSelector(selectBookInfo);
    
   
    const lastPage = progress && progress.filter((item: any) => item.status !== 'active');
    const lastReading = lastPage && lastPage.length > 0 && lastPage[lastPage.length - 1]; 
    const finishPages = lastReading ? lastReading.finishPage : 1;

    

    const isActive = progress && progress.some((item: any) => item.status === 'active');

    

    const validationSchema = Yup.object().shape({
        page: Yup.number()
        .min(finishPages, `Page number must be greater than ${finishPages}` )
        .max(totalPages, `Page number exceeds maximum allowed value ${totalPages}`)
        .required('Page number is required'),
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await validationSchema.validate({ page }, { abortEarly: false });
            await dispatch(startReading({ id: bookId, page }));
            setPage('');
            if (typeof page === 'number' && page === totalPages) {
                handleOpenModal();
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setError(err.message);
            } else {
                console.error('Error starting reading:', err);
            }
        }
    };


     const handleSubmitstop = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await validationSchema.validate({ page }, { abortEarly: false });
            await dispatch(stopReading({ id: bookId, page }));
            setPage('');
            if (typeof page === 'number' && page === totalPages) {
                handleOpenModal();
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setError(err.message);
            } else {
                console.error('Error starting reading:', err);
            }
        }
    };

    const handleOpenModal = () => {
        setModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setModal(false);
        document.body.style.overflow = 'unset';
    };

    return (
    <>
            {!isActive ?
                <FilterFormCont onSubmit={handleSubmit}>
          
                    <h3>Start page:</h3>
                    <div>
                        <input
                            id="pageStart"
                            type="number"
                            value={page}
                            placeholder="0"
                            onChange={(e) => {
                                setPage(parseInt(e.target.value));
                                setError(null);
                            }}
                        />
                        <label>
                            Page number:
                        </label>
                    </div>
                    {error && <span id="error">{error}</span>}

                    <ButtonLogout className="toApply" type="submit">
                        To start
                    </ButtonLogout>
                    <ModalAddBook showModal={showModal} closeModal={handleCloseModal} modal={2} />
                </FilterFormCont> :
                
                <FilterFormCont onSubmit={handleSubmitstop}>
          
                    <h3>Stop page:</h3>
                    <div>
                        <input
                            id="pageStart"
                            type="number"
                            value={page}
                            placeholder="0"
                            onChange={(e) => {
                                setPage(parseInt(e.target.value));
                                setError(null);
                            }}
                        />
                        <label>
                            Page number:
                        </label>
                    </div>
                    {error && <span id="error">{error}</span>}

                    <ButtonLogout className="toApply" type="submit">
                        To stop
                    </ButtonLogout>
                     <ModalAddBook showModal={showModal} closeModal={handleCloseModal} modal={2} />
                </FilterFormCont>}
                </>
    );
};

export default FormToStart;
