// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const AD: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="AD__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="AD__b" fill="#fff">
                    <use xlinkHref="#AD__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#AD__a" />
                <path fill="#1537D1" mask="url(#AD__b)" d="M0 0h28v20H0z" />
                <path fill="#EA3058" mask="url(#AD__b)" d="M13.333 0H28v20H13.333z" />
                <path fill="#FFCF3C" mask="url(#AD__b)" d="M9.333 0h9.333v20H9.333z" />
                <path fill="#FFEDB1" mask="url(#AD__b)" d="M12.667 8.667H14v.666h-1.333z" />
                <path
                    d="M12.387 8.633l.168 2.007a1.14 1.14 0 001.115 1.027h.66c.566 0 1.068-.463 1.115-1.027l.168-2.007c.014-.175-.1-.3-.274-.3h-2.678a.268.268 0 00-.274.3z"
                    stroke="#D32E28"
                    strokeWidth={0.667}
                    mask="url(#AD__b)"
                />
                <path fill="#D32E28" mask="url(#AD__b)" d="M12.667 9.333h2.666V10h-2.666z" />
            </g>
        </svg>
    );
};

AD.defaultProps = {};
export default AD;