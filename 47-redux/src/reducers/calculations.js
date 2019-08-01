import action_types from "../action_types";

const calculationReducers = [
    {
        action: action_types.MULTIPLY_CALC_TOTAL,
        callback: (state, action) => ({
            ...state,
            calculators: state.calculators.map(calc => {
                if (calc.id !== action.payload.calcId) return calc;

                calc.total *= state.multiplier
                return { ...calc }
            })
        })
    }
]

export default calculationReducers