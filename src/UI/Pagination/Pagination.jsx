import React, {useState} from 'react';
import styles from './Pagination.module.css'

const Pagination = ({ productsPerPage, totalProducts, paginate ,currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [checked, setChecked] = useState(1)

    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles.pageItem }>
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;