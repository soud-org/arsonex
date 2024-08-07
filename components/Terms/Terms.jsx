import React, { useContext } from 'react'
import styles from '../Terms/Terms.module.css'
import Accordion from '../Accordion/Accordion';
import ThemeContext from '../ThemeContext';

export default function Terms() {
    const accordionData = [
        {
            title: 'تعاریف',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },
        {
            title: 'شرایط استفاده از خدمات',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },
        {
            title: 'قوانین مبارزه با پولشویی',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },
        {
            title: 'حساب کاربری؛ ایجاد، مدیریت و نگهداری',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },

        {
            title: 'احراز هویت؛ حقیقی و حقوقی',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },

        {
            title: 'هزینه‌های استفاده از خدمات آرسونیکس',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },

        {
            title: 'حریم خصوصی و داده‌های شخصی',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },
        {
            title: 'مالکیت، حقوق مادی و معنوی',
            description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
        },
    ];

    const Changes = [
        {
            date: "1403/3/14",
            description: 'متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید',
            lastText: 'متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید',
            newText: 'متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید',
        },
        {
            date: "1403/7/14",
            description: 'متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید',
            lastText: 'متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید',
            newText: 'متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید',
        }
    ]
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <main className={`container ${theme === 'dark' ? 'theme-dark' : ''}`}>
            <section className={styles.terms_banner}>
                <h2 className={`title ${styles.terms_title}`}>قوانین و مقررات آرسونیکس</h2>
                <p className={styles.terms_description}>متنی که در ادامه آن را مطالعه خواهید کرد، حاوی شرایطی است که شما با استفاده یا مشاهده از ابزارها، محتوا و سرویس‌های "آرسونیکس"، به‌عنوان یک کاربر، می‌پذیرید. این توافق‌نامه به عنوان یک قرارداد میان "آرسونیکس" به‌عنوان ارائه‌دهنده خدمات در زمینه ارزهای دیجیتال و شما به‌عنوان کاربر، شامل مفادی است که برای حل اختلافات بین "آرسونیکس" و شما، به مراجع قانونی کشور مورد استفاده قرار می‌گیرد. همچنین، این توافق‌نامه قابل تغییر است و امکان تغییرات در آن در بازه‌های زمانی مختلف، بسته به شرایط فعلی کشور، وجود دارد. هیچ گونه تبادل ارزی کاغذی اعم از معامله دلار یا سایر ارزهای کاغذی، در آرسونیکس صورت نمی گیرد. کاربر می‌تواند جهت اطلاع از تغییرات ممکن، در بازه‌های زمانی مختلف این صفحه را بررسی نماید. </p>
            </section>

            <section className={styles.acc_container}>
                {accordionData.map((item, index) => (
                    <Accordion key={index} item={item} dark={theme === 'dark'} className={styles.terms_acc} titleStyle={styles.term_acc_title} />
                ))}
            </section>

            <section className={styles.last_changes_holder}>
                <h4 className={styles.last_changes_holder_title}>آخرین تغییرات</h4>

                {Changes.map((item, index) => (
                    <article key={index} className={styles.changes_box}>
                        <span className={styles.changes_box_date}>{item.date}</span>
                        <p className={styles.changes_box_note}>{item.description}</p>
                        <div className={styles.changes_box_last_text}>
                            <h6>متن قبلی</h6>
                            <p>{item.lastText}</p>
                        </div>

                        <div className={styles.changes_box_new_text}>
                            <h6>متن قبلی</h6>
                            <p>{item.newText}</p>
                        </div>
                    </article>
                ))}

            </section>
        </main>
    )
}
