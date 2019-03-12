import { SelectItem } from 'primeng/components/common/selectitem';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

export class EnumUtil {

    static getSelectItems<T>(enumT: T): Array<SelectItem> {
        return Object.entries(enumT).map((key) => ({ label: key[0], value: key } as SelectItem));
    }

}

export class FormsUtil {
    static validaForm(formGroup: FormGroup | FormArray) {
        Object.keys(formGroup.controls).forEach(campo => {
            const controle = formGroup.get(campo);
            if (controle instanceof FormControl) {
                controle.markAsDirty({ onlySelf: true });
            } else if (controle instanceof FormGroup || controle instanceof FormArray) {
                this.validaForm(controle);
            }
        });

    }

}
