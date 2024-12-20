import {Request, Response} from 'express';

export const login = async (req: Request, res: Response) => {
    res.json({ message: 'Login route' });
    // const { email, password } = req.body;
    // if (!email || !password) {
    //     return res.status(400).json({ message: 'Email and password are required' });
    // }
    // try {
    //     const user = await User.findOne({ email });
    //     if (!user) {
    //         return res.status(404).json({ message: 'User not found' });
    //     }
    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!isMatch) {
    //         return res.status(401).json({ message: 'Invalid credentials' });
    //     }
    //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    //     res.json({ token });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Server error' });
    // }
}