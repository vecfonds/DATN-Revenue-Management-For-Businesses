import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const validationSchema = z
    .object({
        username: z.string().min(1, { message: "Tên là bắt buộc" }),
        email: z.string().min(1, { message: "Trường này là bắt buộc" }).email("Email không hợp lệ!"),
        phoneNumber: z.string().min(1, { message: "Số điện thoại là bắt buộc" }),
        address: z.string().min(1, { message: "Địa chỉ là bắt buộc" }),
        password: z
            .string()
            .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Xác nhận mật khẩu là bắt buộc" }),
        terms: z.literal(true, {
            errorMap: () => ({ message: "Bạn phải chấp nhận Điều khoản và Điều kiện" }),
        }),
    }).refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Mật khẩu không khớp",
    });

const Signup = () => {
    // const navigate = useNavigate();

    const [hiddenPwd, setHiddenPwd] = useState(false);
    const [hiddenConfirmPwd, setHiddenConfirmPwd] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log(data)
        // const { username, address, phoneNumber, password } = data;
        // dispatch(signupUser({ username, address, phoneNumber, password }));
    }
    return (
        <div className="login-container">

            <div className="backgr">
                <div className="container">
                    <div className="container_left active-left">
                        <div className="image1">
                            {/* <div className="flex items-center justify-center gap-5 text-8xl text-[#FFCD29] font-bold">
                                <FaCoins /> Big Ledger
                            </div> */}
                            <img src="/assets/logo-no-background.png" alt="" className='w-[35vw] m-auto' />

                        </div>
                    </div>
                    <div className="container_right">
                        <div className="logo">
                        </div>
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-inner">
                                <div className="welcome">
                                    <h1 className="text-[32px]">Đăng ký</h1>
                                </div>

                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            id="username"
                                            placeholder=" "
                                            {...register("username")}
                                        />
                                        <label>Họ và tên</label>
                                    </div>
                                    {errors.username && (
                                        <p className="textDanger">
                                            {errors.username?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            // autoComplete="off"
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            {...register("email")}
                                        />
                                        <label>Email</label>
                                    </div>
                                    {errors.email && (
                                        <p className="textDanger">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            // autoComplete="off"
                                            type="number"
                                            name="phoneNumber"
                                            placeholder=" "
                                            {...register("phoneNumber")}
                                        />
                                        <label>Số điện thoại</label>
                                    </div>
                                    {errors.phoneNumber && (
                                        <p className="textDanger">
                                            {errors.phoneNumber?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-groupS">
                                    <div className="form-group">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="address"
                                            placeholder=" "
                                            {...register("address")}
                                        />
                                        <label>Địa chỉ</label>
                                    </div>
                                    {errors.address && (
                                        <p className="textDanger">
                                            {errors.address?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-groupP">
                                    <div className="form-group2">
                                        <div className="pass-box">
                                            <input placeholder=" "
                                                type={hiddenPwd ? "text" : "password"}
                                                id="password"
                                                name="password"

                                                {...register("password")}
                                            />
                                            <label>Mật khẩu</label>
                                            <div className="eye" onClick={() => setHiddenPwd(!hiddenPwd)}>
                                                <i className={hiddenPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                            </div>
                                        </div>

                                    </div>
                                    {errors.password && (
                                        <p className="textDanger">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-groupP">


                                    <div className="form-group2">
                                        <div className="pass-box">
                                            <input placeholder=" "
                                                type={hiddenConfirmPwd ? "text" : "password"}
                                                id="confirmPassword"
                                                name="confirmPassword"

                                                {...register("confirmPassword")}
                                            />
                                            <label>Xác nhận mật khẩu</label>
                                            <div className="eye" onClick={() => setHiddenConfirmPwd(!hiddenConfirmPwd)}>
                                                <i className={hiddenConfirmPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                            </div>
                                        </div>

                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="textDanger">
                                            {errors.confirmPassword?.message}
                                        </p>
                                    )}
                                </div>


                                <div className="remember">
                                    <div>
                                        <input type="checkbox"
                                            name="terms"
                                            {...register("terms")}
                                        /> <span>Đồng ý với điều khoản và chính sách bảo mật của chúng tôi</span>
                                    </div>

                                    {errors.terms && (
                                        <p className="textDanger">
                                            {errors.terms?.message}
                                        </p>
                                    )}

                                </div>

                                {/* {message &&
                            <p className="textDanger" style={{ textAlign: "center" }}>
                                {message}
                            </p>} */}

                            </div>

                            <button className="submit-btn" type="submit">Gửi</button>

                            <div className="line">
                            </div>
                            <div className="navigator">
                                Chưa có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup