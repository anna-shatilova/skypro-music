import styled from 'styled-components'

export const BarVolumeBlock = styled.div`
  width: auto;
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
  display: box;
  display: -ms-flexbox;
  display: flex;
  box-orient: horizontal;
  box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`
export const VolumeImg = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: 109px;
`
export const VolumeProgressLine = styled.input`
--progress-height: 4px;
--progress-color: #FFFFFF;
--progress-color: ${(props) => props.$color ?? '#FFFFFF'};

--progress-bg-color: ##797979;

margin: 0;
width: 100%;
height: var(--progress-height);
-webkit-appearance: none;
cursor: pointer;
background: transparent;
position: relative;
overflow: hidden;

&::-webkit-slider-runnable-track {
  position: relative;
  height: var(--progress-height);
  background: var(--progress-bg-color);
}
&::-webkit-slider-thumb {
  --thumb-height: 1px;
  --thumb-width: 1px;
  position: relative;
  -webkit-appearance: none;
  width: var(--thumb-width, var(--thumb-height));
  box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
    100vmax var(--progress-color);
}

&::-webkit-slider-runnable-track {
  background: var(--progress-bg-color);
}

/* FF */
&::-moz-range-track {
  width: 100%;
  height: var(--progress-height);
  background: var(--progress-bg-color);
  border: none;
  border-radius: 0px;
}
&::-moz-range-thumb {
  border: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: transparent;
}
&::-moz-range-progress {
  background-color: var(--progress-color);
  height: var(--progress-height);
}
`
